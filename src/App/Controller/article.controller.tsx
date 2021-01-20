import axios from "axios";
import ArticlesInterface from "../Interfaces/articles.interface";

export async function getArticle() {
    let resp: any = await axios
        .get("http://localhost:4000/getArticle")
        .catch(
            () => ({data: {
                title: "How to create my app?",
                sub_title: "By Ivan Cabral",
                image: "https://i.imgur.com/KnlvuaC.png",
                body: "Thanks to see my post!",
                tags: ["react", "app", "project", "2020"]
            }})
    )
    const article: ArticlesInterface = resp.data;
    return article;
}