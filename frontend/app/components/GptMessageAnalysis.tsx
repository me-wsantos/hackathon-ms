import { useEffect, useState } from "react";
import useAppContext from "../context/appContext";
import { IDataAnalysis } from "../interfaces";
import { RiRobot2Line } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export const GptMessageAnalysis = () => {
  const [variation, setVariation] = useState(0);
  const [dataChange, setDataChange] = useState<IDataAnalysis[]>([]);
  const [dataOrder, setDataOrder] = useState(false);
  const { dataAnalysis, analysisPeriod } = useAppContext();
  
  useEffect(()=>{
    setDataChange(dataAnalysis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  useEffect(()=>{
    if (variation > 0) {
      const resp = dataAnalysis.filter((data: IDataAnalysis) => data.variacao >= variation);
      setDataChange(resp);
    }else { 
      setDataChange(dataAnalysis);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[variation])

  const handleChangeVariation = (value: number) => {
    if(value >= 0 ) {
      setVariation(value)
    }
  }

  const sortByVariation = () => {
    if (dataOrder) { 
      dataChange.sort((a, b) => a.variacao - b.variacao);
      return;
    }

    dataChange.sort((a, b) => b.variacao - a.variacao); 
  }
  
  const sortByDifference = () => {
    if (dataOrder) { 
      dataChange.sort((a, b) => Number(a.diferenca) - Number(b.diferenca));
      return;
    }

    dataChange.sort((a, b) => Number(b.diferenca) - Number(a.diferenca)); 
  }
  
  const sortByLiquid = () => {
    if (dataOrder) { 
      dataChange.sort((a, b) => Number(a.liquido) - Number(b.liquido));
      return;
    }

    dataChange.sort((a, b) => Number(b.liquido) - Number(a.liquido)); 
  }
  
  const sortByDiscount = () => {
    if (dataOrder) { 
      dataChange.sort((a, b) => Number(a.desconto) - Number(b.desconto));
      return;
    }

    dataChange.sort((a, b) => Number(b.desconto) - Number(a.desconto)); 
  }
  
  const sortByIncome = () => {
    if (dataOrder) { 
      dataChange.sort((a, b) => Number(a.provento) - Number(b.provento));
      return;
    }

    dataChange.sort((a, b) => Number(b.provento) - Number(a.provento)); 
  }
  
  const sortByBaseSalary = () => {
    if (dataOrder) { 
      dataChange.sort((a, b) => Number(a.salario) - Number(b.salario));
      return;
    }

    dataChange.sort((a, b) => Number(b.salario) - Number(a.salario)); 
  }
  
  const sortByName = () => {
    if (dataOrder) { 
      dataChange.sort((a, b) => {
        const nameA = a.nome.toUpperCase();
        const nameB = b.nome.toUpperCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      dataChange.sort((a, b) => {
        const nameA = a.nome.toUpperCase();
        const nameB = b.nome.toUpperCase();

        if (nameA > nameB) {
          return -1;
        } else if (nameA < nameB) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

  const iconOrder = () => {
    return dataOrder ? <IoMdArrowDropup /> : <IoMdArrowDropdown />;
  }

  return (
    <div className="col col-start-1 col-end-12 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-custom-blue flex-shrink-0 text-white text-x">
          <RiRobot2Line size={20} />
        </div>

        <div className="relative w-full ml-3 text-sm bg-gray-100 py-2 px-4 shadow rounded-xl">
          <div className="flex justify-between">
            <div>
              <div className="font-bold">Resultado da análise</div>
              <div className="font-normal">Período: {analysisPeriod}</div>
              <div className="font-normal">
                Total de registros: { dataChange != undefined ? dataChange.length : 0 }
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="variation" className="mr-4 text-custom-blue">{`Destacar variação >=`}</label>
              <input 
                type="number"
                id="variation"
                value={variation}
                className="p-1 rounded-md w-24 text-center border"
                onChange={(e)=>handleChangeVariation(Number(e.target.value))}
              />
            </div>
          </div>

          <table className="table-auto border mt-4 w-full">
            <thead>
              <tr className="border">
                <th 
                  className="border p-2 text-center"
                  onClick={ ()=> [setDataOrder(!dataOrder), sortByName()] }
                >
                  <div className="flex justify-center items-center cursor-pointer">
                    Nome { iconOrder() }
                  </div>
                </th>

                <th 
                  className="border p-2 text-center"
                  onClick={ ()=> [setDataOrder(!dataOrder), sortByBaseSalary()] }
                >
                  <div className="flex justify-center items-center cursor-pointer">
                    Sal. Base { iconOrder() }
                  </div>
                </th>

                <th 
                  className="border p-2 text-center"
                  onClick={ ()=> [setDataOrder(!dataOrder), sortByIncome()] }
                >
                  <div className="flex justify-center items-center cursor-pointer">
                    Provento { iconOrder() }
                  </div>
                </th>

                <th 
                  className="border p-2 text-center"
                  onClick={ ()=> [setDataOrder(!dataOrder), sortByDiscount()] }
                  >
                    <div className="flex justify-center items-center cursor-pointer">
                      Desconto { iconOrder() }
                    </div>
                </th>
                
                <th 
                  className="border p-2 text-center"
                  onClick={ ()=> [setDataOrder(!dataOrder), sortByLiquid()] }
                  >
                    <div className="flex justify-center items-center cursor-pointer">
                      Líquido { iconOrder() }
                    </div>
                </th>
                
                <th 
                  className="border p-2 text-center"
                  onClick={ ()=> [setDataOrder(!dataOrder), sortByDifference()] }
                  >
                    <div className="flex justify-center items-center cursor-pointer">
                      Diferença { iconOrder() }
                    </div>
                </th>
                
                <th 
                  className="border p-2 text-center"
                  onClick={ ()=> [setDataOrder(!dataOrder), sortByVariation()] }
                  >
                    <div className="flex justify-center items-center cursor-pointer">
                      Variação { iconOrder() }
                    </div>
                </th>
              </tr>
            </thead>
            <tbody>
              { dataChange != undefined && !!dataChange.length && (
                dataChange.map((data, i) => (
                  <tr 
                    key={i} 
                    className={`${Number(variation) == 0 
                      ? 'bg-white' 
                      : (Number(data.variacao) >= variation ? 'bg-red-200' : 'bg-white') }
                      hover:bg-gray-100
                      `}
                  >
                    <td className="border p-2 text-center">{ data.nome }</td>
                    <td className="border p-2 text-center">{ Number(Number(data.salario).toFixed(2)).toLocaleString('pt-BR') }</td>
                    <td className="border p-2 text-center">{ Number(Number(data.provento).toFixed(2)).toLocaleString('pt-BR') }</td>
                    <td className="border p-2 text-center">{ Number(Number(data.desconto).toFixed(2)).toLocaleString('pt-BR') }</td>
                    <td className="border p-2 text-center">{ Number(Number(data.liquido).toFixed(2)).toLocaleString('pt-BR') }</td>
                    <td className="border p-2 text-center">{ Number(Number(data.diferenca).toFixed(2)).toLocaleString('pt-BR') }</td>
                    <td className="border p-2 text-center">{ Number(Number(data.variacao).toFixed(0)).toLocaleString('pt-BR') }%</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
