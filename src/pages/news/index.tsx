import React from 'react'
import Layout from '../../components/Layout'
import Article from '../../components/Article'

export default function News() {
    return (
        <Layout>
            <div>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </Layout>
    )
}