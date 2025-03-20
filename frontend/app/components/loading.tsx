interface Props {
    value?: string
}

export function Loading ({value}: Props) {
    return(
        <div className="flex items-center justify-center">
            <div className="mr-4">{value}</div>
            <div className="loader-button"></div>
        </div>

    )
  }
  
  export default Loading