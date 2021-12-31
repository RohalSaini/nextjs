import articleStyle from '../styles/Article.module.css'
import Link from 'next/link';

const ArticleItem = ({article}) => {
    return (
        <Link href="/article/{id}" as = {`/article/${article.id}`}>
            <a className={articleStyle.card}>
                <h3 className={articleStyle.title}>{article.title} &rarr;</h3>
                <p className={articleStyle.card}>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem;