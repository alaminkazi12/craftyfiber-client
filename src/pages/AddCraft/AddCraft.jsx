const AddCraft = () => {
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const Item_name = form.item_name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const name = form.name.value;
    const email = form.email.value;
    const stock = form.stock.value;

    const craftItem = {
      image,
      Item_name,
      category,
      price,
      rating,
      customization,
      processing_time,
      name,
      email,
      stock,
    };

    console.log(craftItem);
  };
  return (
    <div className="mt-10">
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74]">
        Add Craft
      </h2>
      <div className="w-1/2 mx-auto bg-[#F5F5F5] border-2 border-[#C9B38F] rounded-2xl p-6 mt-4 shadow-xl">
        <form onSubmit={handleAddCraft}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Use Image Url"
              name="image"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
              name="item_name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="flex  justify-between items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Catagory Name</span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled defaultValue>
                  Select the appropriate category name.
                </option>
                <option> Embroidery</option>
                <option>Knitting & Crocheting</option>
                <option>Quilting</option>
                <option>Beadwork</option>
                <option>Tie-Dyeing</option>
                <option>Macrame</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex justify-between gap-2 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <select
                name="stock"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled defaultValue>
                  Select the appropriate stock status.
                </option>
                <option> In Stock</option>
                <option>Made to Order</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <input
                type="text"
                placeholder="yes, no"
                name="customization"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              name="rating"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing time</span>
            </label>
            <input
              type="text"
              placeholder="Processing time"
              name="processing_time"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex  justify-between">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                placeholder="User Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <input
            className="w-full btn bg-[#B08D74] mt-4"
            type="submit"
            value="Add Craft"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
