interface Props {
  imgSrc?: string;
}

const NadeContainer = (props: Props) => {
  const { imgSrc } = props;
  return (
    <div className="m-4 flex flex-row space-x-4 rounded-xl border p-4 shadow-md">
      <div className="rounded-xl border bg-gray-100">
        <img src={imgSrc} width={200} height={200} alt="img" />
      </div>
      <div className="flex-col space-y-4">
        <div className="text-lg">actions:</div>
        <div>put actions here</div>
      </div>
    </div>
  );
};

export default NadeContainer;
