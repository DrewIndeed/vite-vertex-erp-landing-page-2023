import Icons from "./icons";
import "./style.css";

const Fotter = () => {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* footer links 4 columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            aria-label="Brand"
            className="font-mono flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href=""
          >
            VertexERP
          </a>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © 2023 VertexERP.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Product
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a className="footer-items" href="">
                Pricing
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Changelog
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Docs
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Download
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Company
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a className="footer-items" href="">
                About us
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Blog
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Careers
              </a>{" "}
              <span className="inline text-blue-600 dark:text-blue-500">
                — We're hiring
              </span>
            </p>
            <p>
              <a className="footer-items" href="">
                Customers
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Newsroom
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Sitemap
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Resources
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a className="footer-items" href="">
                Community
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Help & Support
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                eBook
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                What's New
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Status
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Developers
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a className="footer-items" href="">
                Api
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Status
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                GitHub
              </a>{" "}
              <span className="inline text-blue-600 dark:text-blue-500">
                — New
              </span>
            </p>
          </div>

          <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Industries
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a className="footer-items" href="">
                Financial Services
              </a>
            </p>
            <p>
              <a className="footer-items" href="">
                Education
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* languages and socials */}
      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          {/* languages */}
          <div className="flex items-center gap-x-3">
            {/* language switcher */}
            <div className="hs-dropdown relative inline-flex [--placement:top-left]">
              {/* current selecting language */}
              <button
                type="button"
                id="footer-language-dropdown"
                className="hs-dropdown-toggle language-dropdown-btn"
              >
                <Icons.English />
                English (US)
                <Icons.ChevronUp />
              </button>
              {/* other language options */}
              <div
                className="hs-dropdown-menu duration language-dropdown-open"
                aria-labelledby="footer-language-dropdown"
              >
                <a className="language-option" href="">
                  <Icons.English />
                  English (US)
                </a>
                <a className="language-option" href="">
                  <Icons.Chinese />
                  中文 (繁體)
                </a>
              </div>
            </div>
            {/* terms and conditions */}
            <div className="space-x-4 text-sm ms-4">
              <a className="footer-items" href="">
                Terms
              </a>
              <a className="footer-items" href="">
                Privacy
              </a>
              <a className="footer-items" href="">
                Status
              </a>
            </div>
          </div>
          {/* socials */}
          <div className="flex justify-between items-center">
            <div className="mt-3 sm:hidden">
              <a
                className="font-mono flex-none text-xl font-semibold dark:text-white"
                href=""
                aria-label="Brand"
              >
                VertexERP
              </a>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                © 2023 VertexERP.
              </p>
            </div>

            <div className="space-x-4">
              <a className="social-icon" href="">
                <Icons.Twitter />
              </a>
              <a className="social-icon" href="">
                <Icons.GitHub />
              </a>
              <a className="social-icon" href="">
                <Icons.Slack />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
