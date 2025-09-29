import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
 
  label?: React.ReactNode;
  
  classes?: string;

  icon?:React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon,label, classes = '', className, type = 'button', children, ...rest }, ref) => {
    const combinedClassName = [className, classes].filter(Boolean).join(' ');

    return (
      <button ref={ref} type={type} className={combinedClassName} {...rest}>
        {label ?? children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
