const Form = () => {
  return (
    <section className="bg-white py-16 ">
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="bg-[#7A50EB] py-16 text-center mx-auto">
          <h2 className="font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
            get update from anywhere
          </h2>
          <p className="mt-4 text-white text-sm">
            Bearing Void gathering light light his eavening unto dont afraid.
          </p>
          {/* Form */}
          <div className="w-8/12 mx-auto">
            <form className="mt-5 flex flex-col sm:flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="text-white focus:outline-none border border-white rounded-sm w-full md:w-8/12 py-2 text-sm px-1.5"
              />
              <button className="w-full md:w-4/12 bg-white font-semibold text-sm py-2 md:px-5 lg:px-10 rounded-sm border">
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
