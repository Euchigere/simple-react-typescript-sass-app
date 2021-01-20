import React, {useEffect, useState} from "react";
import ArticlesInterface from "../../Interfaces/articles.interface";
import ArticleModel from "../../Models/articles.model";
import {getArticle} from "../../Controller/article.controller";

function Article() {
    const [article, setArticle] = useState<ArticlesInterface>(ArticleModel);

    async function setArt() {
        let art: ArticlesInterface = await getArticle();
        setArticle(art);
    }

    useEffect(() => {
        if (article === ArticleModel) {
            setArt();
        }
    }, [article])

    return (
        <div className="article-container">
            <div className="title">{article.title}</div>
            <div className="sub-title">{article.sub_title}</div>
            <div className="image-container">
                <img src={article.image} alt="img"/>
            </div>
            <div className="body">{article.body}</div>
            <div className="tags-container">
                {article.tags && article.tags.map((tag, key) => (
                    <div key={key} className="tag">
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Article;