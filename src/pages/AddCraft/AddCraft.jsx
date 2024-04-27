const AddCraft = () => {
  return (
    <div className="mt-10">
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74]">
        Add Craft
      </h2>
      <div className="w-1/2 mx-auto bg-[#F5F5F5] rounded-2xl p-6 mt-4">
        <form>
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
              name="image"
              className="input input-bordered"
              required
            />
          </div>

          <div className="flex  justify-between items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Catagory Name</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select the appropriate category name.
                </option>
                <option> Embroidery</option>
                <option>Knitting & Crocheting</option>
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
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
