import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Price from "@/Components/Price";
import Table from "@/Components/Table";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-2">
                <div className="mx-auto sm:px-1 lg:px-2">
                    {/*
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                    </div>
                    */}
                    <Table />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
