import React, { ComponentPropsWithoutRef } from "react";
import { mergeClasses } from "app/utils/merge-classes";

type P = ComponentPropsWithoutRef<"section">;

export const Container = ({ children, className = "", ...props }: P) => {
  return (
    <section
      className={mergeClasses({
        classes: ["max-w-screen-xl w-full px-6 lg:px-12 mx-auto", className]
      })}
      {...props}
    >
      {children}
    </section>
  );
};
