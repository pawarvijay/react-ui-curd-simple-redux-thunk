'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Container } from 'react-bootstrap';
import { fetchItems, deleteItem } from "@/service/item.service";

export const ItemList = ({ onEdit }) => {
    const items = useSelector((state) => state.items.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    if (items.length === 0) {
        return (
            <Container className="mt-4">
                <p className="text-center text-muted">No items found. Add a new item to get started.</p>
            </Container>
        );
    }

    return (
        <Container className="mt-4" >
            <h2>Items List</h2>
            <Table striped bordered hover responsive width='100%'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.description}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => onEdit && onEdit(item)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};
