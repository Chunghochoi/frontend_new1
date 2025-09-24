type Props = {
  response: string;
};

export default function ResultBox({ response }: Props) {
  return (
    <div className="mt-4 p-3 rounded-lg bg-gray-800 border border-gray-700">
      <p className="text-sm text-gray-300">Phản hồi:</p>
      <p className="text-blue-300 break-all">{response}</p>
    </div>
  );
}
