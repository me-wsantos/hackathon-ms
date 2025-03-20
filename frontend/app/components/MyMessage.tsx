interface Props{
  text: string
}

export const MyMessage = ({ text }: Props) => {
  return (
    <div className="col col-start-6 col-end-3 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#15c700] flex-shrink-0 text-sm text-white">
          Eu
        </div>
        <div className="relative mr-3 text-sm bg-custom-blue-50 py-2 px-4 shadow rounded-xl">
          { text }
        </div>
      </div>
    </div>
  )
}
