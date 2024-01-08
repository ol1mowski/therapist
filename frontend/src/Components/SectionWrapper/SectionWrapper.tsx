import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  id: string;
  classes: string,
};

const SectionWrapper = ({ children, id, classes }: SectionWrapperProps) => {
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};

export default SectionWrapper;
