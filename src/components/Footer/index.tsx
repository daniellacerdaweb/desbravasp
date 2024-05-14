export const Footer = () => {
  const items = [
    "Home",
    "DesbravaSP",
    "Restaurantes",
    "Hospedagens",
    "Promoções",
    "Contato",
  ];
  return (
    <footer className="bg-white  dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://desbravasp.com.br"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="logo-desbrava-sao-paulo-horizontal.png"
              className="h-12"
              alt="Desbrava SP Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {items?.map((item) => {
              return (
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://desbravasp.com.br" className="hover:underline">
            Desbrava São Paulo
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
