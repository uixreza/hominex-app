type Badge = {
  value: string;
};

export const Blue = ({ value }: Badge) => (
  <span
    id="badge-dismiss-default"
    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300">
    {value}
    <button
      type="button"
      className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-xs hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
      data-dismiss-target="#badge-dismiss-default"
      aria-label="Remove">
      <svg
        className="w-2 h-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  </span>
);
export const Gray = ({ value }: Badge) => (
  <span
    id="badge-dismiss-dark"
    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-sm dark:bg-gray-700 dark:text-gray-300">
    {value}
    <button
      type="button"
      className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-xs hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
      data-dismiss-target="#badge-dismiss-dark"
      aria-label="Remove">
      <svg
        className="w-2 h-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  </span>
);

export const Red = ({ value }: Badge) => (
  <span
    id="badge-dismiss-red"
    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-red-800 bg-red-100 rounded-sm dark:bg-red-900 dark:text-red-300">
    {value}
    <button
      type="button"
      className="inline-flex items-center p-1  ms-2 text-sm text-red-400 bg-transparent rounded-xs hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300"
      data-dismiss-target="#badge-dismiss-red"
      aria-label="Remove">
      <svg
        className="w-2 h-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  </span>
);
export const Green = ({ value }: Badge) => (
  <span
    id="badge-dismiss-green"
    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-green-800 bg-green-100 rounded-sm dark:bg-green-900 dark:text-green-300">
    {value}
    <button
      type="button"
      className="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-xs hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
      data-dismiss-target="#badge-dismiss-green"
      aria-label="Remove">
      <svg
        className="w-2 h-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  </span>
);
export const Yellow = ({ value }: Badge) => (
  <span
    id="badge-dismiss-yellow"
    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
    {value}
    <button
      type="button"
      className="inline-flex items-center p-1 ms-2 text-sm text-yellow-400 bg-transparent rounded-xs hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300"
      data-dismiss-target="#badge-dismiss-yellow"
      aria-label="Remove">
      <svg
        className="w-2 h-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  </span>
);

export const Indigo = ({ value }: Badge) => (
  <span
    id="badge-dismiss-indigo"
    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-sm dark:bg-indigo-900 dark:text-indigo-300">
    {value}
    <button
      type="button"
      className="inline-flex items-center p-1 ms-2 text-sm text-indigo-400 bg-transparent rounded-xs hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300"
      data-dismiss-target="#badge-dismiss-indigo"
      aria-label="Remove">
      <svg
        className="w-2 h-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  </span>
);
export const Purple = ({ value }: Badge) => (
  <span
    id="badge-dismiss-purple"
    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-purple-800 bg-purple-100 rounded-sm dark:bg-purple-900 dark:text-purple-300">
    {value}
    <button
      type="button"
      className="inline-flex items-center p-1 ms-2 text-sm text-purple-400 bg-transparent rounded-xs hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300"
      data-dismiss-target="#badge-dismiss-purple"
      aria-label="Remove">
      <svg
        className="w-2 h-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  </span>
);
export const Pink = ({ value }: Badge) => (
  <span
    id="badge-dismiss-pink"
    className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-pink-800 bg-pink-100 rounded-sm dark:bg-pink-900 dark:text-pink-300">
    {value}
    <button
      type="button"
      className="inline-flex items-center p-1 ms-2 text-sm text-pink-400 bg-transparent rounded-xs hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300"
      data-dismiss-target="#badge-dismiss-pink"
      aria-label="Remove">
      <svg
        className="w-2 h-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  </span>
);
