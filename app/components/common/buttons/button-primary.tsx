import React, { ComponentPropsWithRef, forwardRef, ForwardRefExoticComponent } from "react";
import { ButtonGhost } from "./button-ghost";
import { mergeClasses } from "app/utils/merge-classes";

type P = ComponentPropsWithRef<"button"> & {
  ignoreClasses?: string;
};

/**
 * **This is Primary Alternative Variant of Button Component**
 *
 * @description
 * Used for call-to-actions, primary actions, user prompts and other really important things that usually targets the business needs.
 *
 * @param ignoreClasses - classes that have to be ignored while merging with default classes
 * @param props - all the props of the button element
 *
 * @returns Button Element
 */
const ButtonPrimary: ForwardRefExoticComponent<P> = forwardRef<HTMLButtonElement>(
  (props: P, ref) => {
    const { children, className = "", ignoreClasses = "", ...restProps } = props;

    return (
      <button
        ref={ref}
        className={mergeClasses({
          classes: [
            "px-4 py-3 bg-primary-600 text-white-600 transition duration-[300ms] ease-in-out border-primary-600 border-[1px] leading-tight font-bold rounded-[52px] text-white-600 disabled:opacity-40 font-normal",
            className
          ],
          ignore: ignoreClasses
        })}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

ButtonPrimary.displayName = "ButtonPrimary";

export default ButtonPrimary;
