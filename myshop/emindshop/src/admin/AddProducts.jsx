import React, {useState} from 'react'
import {Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify'

import {db,storage} from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'
import "../styles/checkout.css"

const AddProducts = () => {

    const [enterTitle, setEnterTitle] = useState('')
    const [enterShortDesc, setEnterShortDesc] = useState('')
    const [enterDescription, setEnterDescription] = useState('')
    const [enterCategory, setEnterCategory] = useState('')
    const [enterPrice, setEnterPrice] = useState('')
    const [enterProductImg, setEnterProductImg] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const addProduct = async(e)=>{
        e.preventDefault()
        setLoading(true)


        try {
            
            const docRef = await collection(db, 'products')

            const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

            uploadTask.on(()=>{
                toast.error('images not uploaded!')
            }, ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
                    await addDoc(docRef, {
                        productName: enterTitle,
                        shorDesc: enterShortDesc,
                        description: enterDescription,
                        category: enterCategory,
                        price: enterPrice,
                        imgUrL: downloadURL,
                    } )
                })

                

            })

            setLoading(false)
            toast.success('product successfully added!')
            navigate('/dashboard/all-products')

        } catch (err) {

            setLoading(false)
            toast.error('product not added!')
        }     
    }

    return(
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    {
                        loading ? (<h4 className='py-5'>Loading.....</h4>) : (<>
                        
                        <h4 className='mb-5'>Add Product</h4>
                    <Form onSubmit={addProduct}>
                        <FormGroup className="form_group">
                            <span>Product title : </span>
                            <input type="text" placeholder='Text Name' value={enterTitle} onChange={e=> setEnterTitle(e.target.value)} required/>
                        </FormGroup>
                        <FormGroup className="form_group">
                            <span>Short Description : </span>
                            <input type="text" placeholder='lorem.....' value={enterShortDesc} onChange={e=> setEnterShortDesc(e.target.value)} required/>
                        </FormGroup>

                        <FormGroup className="form_group">
                            <span>Description : </span>
                            <input type="text" placeholder='Description.....' value={enterDescription} onChange={e=> setEnterDescription(e.target.value)} required/>
                        </FormGroup>

                        <div className='d-flex align-items-center justify-content-between gap-5'>
                        <FormGroup className="form_group w-50">
                            <span>Price : </span>
                            <input type="number" placeholder='$100' value={enterPrice} onChange={e=> setEnterPrice(e.target.value)} required/>
                        </FormGroup>

                        <FormGroup className="form_group w-50">
                            <span>Category</span>
                            <select className='w-100 p-2' value={enterCategory} onChange={e=> setEnterCategory(e.target.value)}>
                                <option>Select category</option>
                                <option value="kitchenutensils">Kitchen Utensils</option>
                                <option value="cookware">Cookware</option>
                                <option value="moblie">Moblie</option>
                                <option value="knife">Knife</option>
                                <option value="wireless">Wireless</option>
                            </select>
                        </FormGroup>
                        </div>

                        <div>   
                        <FormGroup className="form_group">
                            <span>Product Image</span>
                            <input type="file" onChange={e=> setEnterProductImg(e.target.files[0])} required/>
                        </FormGroup>
                        </div>

                        <button className="buy_btn" type='submit'>Add Product</button>
                    </Form>
                        </>)
                    }
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default AddProducts