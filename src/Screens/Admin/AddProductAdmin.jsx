import React, { useState } from "react";
import PropTypes from "prop-types";
import LayoutAdmin from "../../Layout/LayoutAdmin";
import InputAdmin from "../../common/admin/InputAdmin";
import { MultiSelect } from "react-multi-select-component";
import TitleAdmin from "../../common/title";
import ButtonAdmin from "../../common/admin/ButtonAdmin";
AddProductAdmin.propTypes = {};

function AddProductAdmin(props) {
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
  ];

  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedTopping, setSelectedTopping] = useState([]);
  const [productTextArea, setProductTextArea] = useState({
    content: "",
    editor: "",
  });

  console.log(selectedSize);
  return (
    <LayoutAdmin>
      <div className="flex w-full flex-wrap gap-4">
        <div className="w-full flex justify-start">
          <TitleAdmin title="Thêm sản phẩm" />
        </div>
        <form action="" className="flex flex-wrap w-full ">
          <div className="w-1/2 flex flex-col gap-8">
            <div className="w-full pr-16">
              <InputAdmin
                placeholder="Nhập tên sản phẩm"
                label="Tên Sản phẩm"
                requireSpan="*"
                type="text"
                name="product"
              />
            </div>
            <div className="w-full pr-16">
              <InputAdmin
                placeholder="Nhập giá sản phẩm"
                label="Giá Sản phẩm"
                requireSpan="*"
                type="text"
                name="price"
              />
            </div>
            <div className="w-full pr-16 flex flex-col gap-2">
              <label>
                Chọn danh mục
                <span className="text-red-500">*</span>
              </label>
              <select
                className="change-arrow border w-full  focus:shadow-md  border-gray-300 rounded-5 shadow-md py-2 px-3 appearance-none"
                name="category_id"
                id=""
              >
                <option value="">Chọn danh mục</option>
                <option value="">Coffee</option>
                <option value="">Trà</option>
                <option value="">Trà sữa</option>
                <option value="">Món ăn nhẹ</option>
              </select>
            </div>
            <div className="w-full pr-16">
              <InputAdmin
                placeholder="Nhập giá sản phẩm"
                label="Giá Sản phẩm"
                requireSpan="*"
                type="file"
                name="price"
              />
            </div>
          </div>
          <div className="w-1/2 pr-10">
            <div className="w-full flex gap-2">
              <div className="w-1/2 flex flex-col gap-2">
                <label>
                  Chọn Size <span className="text-red-500">*</span>
                </label>
                {/* <pre>{JSON.stringify(selectedSize)}</pre> */}
                <MultiSelect
                  options={options}
                  value={selectedSize}
                  className="shadow-md"
                  onChange={setSelectedSize}
                  labelledBy="Select"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label>
                  Chọn Topping <span className="text-red-500">*</span>
                </label>
                {/* <pre>{JSON.stringify(selectedTopping)}</pre> */}
                <MultiSelect
                  options={options}
                  value={selectedTopping}
                  className="shadow-md"
                  onChange={setSelectedTopping}
                  labelledBy="Select"
                />
              </div>
            </div>
            <div className="flex w-full gap-2 mt-8">
              <div className="w-1/2 flex flex-col gap-3">
                {selectedSize.length > 0 &&
                  selectedSize.map((item, index) => {
                    const count = index + 1;
                    return (
                      <div className=" border p-2 gap-2 flex justify-center w-fit items-center shadow-md border-gray-300 rounded-md">
                        <p className="text-border">#{count}</p>
                        <label for="1" className="  text-border">
                          {item.label}
                        </label>
                      </div>
                    );
                  })}
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                {selectedTopping.length > 0 &&
                  selectedTopping.map((item, index) => {
                    const count = index + 1;
                    return (
                      <div className=" border p-2 gap-2 flex justify-center w-fit items-center shadow-md border-gray-300 rounded-md">
                        <p className="text-border">#{count}</p>
                        <label for="1" className="  text-border">
                          {item.label}
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <label className="mb-2">Mô tả sản phẩm</label>
            <div class="w-full mb-4 mt-2 border border-gray-200 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                  <div class="flex items-center space-x-1 sm:pr-4">
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Embed map</span>
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Upload image</span>
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Format code</span>
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Add emoji</span>
                    </button>
                  </div>
                  <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Add list</span>
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Settings</span>
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Timeline</span>
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Download</span>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  data-tooltip-target="tooltip-fullscreen"
                  class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Full screen</span>
                </button>
                <div
                  id="tooltip-fullscreen"
                  role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Show full screen
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <label for="editor" class="sr-only">
                  Publish post
                </label>
                <textarea
                  id="editor"
                  rows="8"
                  class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write an article..."
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <ButtonAdmin
              style="bg-orange-1 border-orange-2 hover:bg-orange-2 hover:border-orange-1   "
              text="Tạo mới"
            />
          </div>
        </form>
      </div>
    </LayoutAdmin>
  );
}

export default AddProductAdmin;
