import React from 'react'
import Container from "@/app/components/Container";
import {IGetArticle} from "@/app/blogs/page";


interface IArticleProps {
    params: Promise<{id: string}>,
    searchParams: Promise<{}>,
}

async function ArticleDetails(props: IArticleProps) {

    const { id } = await props.params;
    const res = await fetch(`http://localhost:3001/article/${id}`);
    const article = await res.json() as IGetArticle;

    return (
        <Container>
            <div>
                <h2 className='font-bold text-3xl my-6'>{article.title}</h2>
                <p>{article.description}</p>
            </div>
        </Container>
    )
}


export default ArticleDetails;