import React from "react";
import Container from "@/app/components/Container";
import Article from "@/app/components/Article";
import Link from "next/link";

export interface IGetArticle {
    "id": string,
    "title": string,
    "description": string
}

async function Blogs(){

    const res = await fetch("http://localhost:3001/article");
    const articles = await res.json() as IGetArticle[];

    return (
        <Container>
            <div className='grid grid-cols-4 gap-4 py-8'>
                {articles.map((article: IGetArticle) => (
                    <Link href={`/blogs/${article.id}`} key={article.id}>
                        <Article {...article} key={article.id} />
                    </Link>
                ))}
            </div>
        </Container>
    )
}

export default Blogs;