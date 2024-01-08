import { type ReactNode } from 'react';
import s from './HeaderOfArticle.module.scss';

type HeaderOfArticleProps = {
    children: ReactNode,
}

const HeaderOfArticle = ({ children }: HeaderOfArticleProps) => {
  return (
    <h2 className={s.header}>{ children }</h2>
  )
}

export default HeaderOfArticle
