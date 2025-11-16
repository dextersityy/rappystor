
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 px-4 sm:px-8 md:px-10 lg:px-20 py-5">
          <div className="mx-auto flex max-w-[960px] flex-1 flex-col">
            <h1 className="text-4xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <div className="mt-8 space-y-4 text-white/80">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  What is rppystore?
                </h2>
                <p>
                  rppystore is a platform where you can instantly access
                  premium accounts for a variety of services, including
                  streaming, productivity, and more.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  How does it work?
                </h2>
                <p>
                  You can browse our products, purchase an account using your
                  saldo, and get instant access to the premium features.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Is it safe?
                </h2>
                <p>
                  Yes, our platform is secure and we prioritize the privacy
                  and safety of our users.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default FAQPage;
