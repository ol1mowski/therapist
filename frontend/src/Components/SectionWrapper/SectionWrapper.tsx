import { ReactNode } from 'react';
import s from './SectionWrapper.module.scss';

type SectionWrapperProps = {
    children: ReactNode,
}

const SectionWrapper = ({ children}: SectionWrapperProps) => {
  return (
    <section className={s.container}>
        { children }
    </section>
  )
}

export default SectionWrapper
