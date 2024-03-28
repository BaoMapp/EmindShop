

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData'

import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import {toast} from 'react-toastify'
import "../styles/user.css"

const Users = () => {

    const {data: userData, loading} = useGetData('users')

    const deleteUser = async(id)=>{
        await deleteDoc(doc(db, 'users', id))
        toast.success('user deleted!')
    }

  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' ><h4 className='fw-bold'>Users</h4></Col>
                <Col lg='12' className='pt-5'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                    <tbody>
                        {
                            loading ? <h5 className='pt-5 fw-bold'>Loading......</h5> : userData?.map(user=>(
                                <tr key={user.uid}>
                                    <tb><img className='img_user' src={ user?.photoURL} alt="" /></tb>
                                    <tb>{user.displayName}</tb>
                                    <tb>{user.email}</tb>
                                    <tb><button className='btn btn-danger'onClick={()=>{deleteUser(user.uid)}}>Delete</button></tb>
                                </tr>
                            ))
                        }
                    </tbody>

                    </table>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Users