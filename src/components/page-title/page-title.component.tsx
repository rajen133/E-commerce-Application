export const Title = ({ children }: Readonly<{ children: any }>) => {
  return (
    <>
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        {children}
      </h2>
    </>
  );
};

const PageTitle = ({ pageTitle }: Readonly<{ pageTitle: string }>) => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <Title>
          {" "}
          <p>Welcome back!</p>
          {pageTitle}
        </Title>
      </div>
    </>
  );
};
export default PageTitle;
