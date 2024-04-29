const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-bold text-[#B08D74]">
        Got Questions? We've Got Answers
      </h2>
      <p className="text-gray-600 w-[90%] md:w-[60%] text-center text-xs md:text-lg  mt-4">
        Explore Our FAQ Section for Everything You Need to Know About Crafting,
        Orders, and More
      </p>
      <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-[50%]">
          <img src="/assets/images/faq.png" alt="faq" />
        </div>
        <div className="md:w-[50%]">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What materials do you use for your craft items?
            </div>
            <div className="collapse-content">
              <p>
                We use high-quality materials sourced from reputable suppliers
                to create our craft items. These materials may include yarn for
                knitting and crocheting, fabric for quilting, beads for
                beadwork, and natural fibers for macrame.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I customize or personalize an item?
            </div>
            <div className="collapse-content">
              <p>
                Yes, many of our craft items can be customized or personalized
                to suit your preferences. Simply contact us with your specific
                requests, and we'll work with you to create a one-of-a-kind
                piece that reflects your style.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I care for and maintain my craft items?
            </div>
            <div className="collapse-content">
              <p>
                Care instructions vary depending on the type of craft item.
                Generally, we recommend handwashing or spot cleaning for
                delicate items like embroidered pieces and knitted blankets. For
                more detailed care instructions, please refer to the product
                description or contact us for assistance.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What is your shipping policy?
            </div>
            <div className="collapse-content">
              <p>
                We offer worldwide shipping on all orders. Shipping costs and
                delivery times may vary depending on your location and the size
                of your order. For more information, please visit our Shipping
                Policy page or contact us for personalized assistance.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do you accept returns or exchanges?
            </div>
            <div className="collapse-content">
              <p>
                We want you to be completely satisfied with your purchase. If
                for any reason you're not happy with your craft item, please
                contact us within 30 days of receiving your order to arrange a
                return or exchange. Please note that personalized or customized
                items may not be eligible for return unless they arrive damaged
                or defective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
