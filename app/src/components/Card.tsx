const Card = ({
    className,
    children,
    ...props
  }: {
    className?: string
    children: React.ReactNode
    props?: unknown
  }): React.ReactElement => {
    return (
      <div
        className={`${className} bg-white rounded drop-shadow-md p-3 m-1 dark:bg-slate-700`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export default Card;