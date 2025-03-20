export interface IAnalysisResource {
  icon: string;
  title: string;
  description: string;
  model: string;
}

export interface IDataAnalysis {
  nome: string;
  provento: string;
  desconto: string;
  liquido: string;
  datapagamento: string;
  dtpagamento: string;
  salario: string;
  diferenca: string;
  folha: string;
  variacao: number;
}

export interface IMessage {
  text: string;
  isGpt: boolean;
  isAnalysis?: boolean;
}

export interface IUser {
  email: string;
  password: string;
}

export interface IAppContext {
  dataAnalysis: IDataAnalysis[]
  setDataAnalysis(value: IDataAnalysis[]):void
  messages: IMessage[],
  setMessages(value: any):void
  analysisPeriod: string
  setAnalysisPeriod(value: string): void
  isLoading: boolean
  setIsLoading(value:boolean):void
  moduleActive: number,
  setModuleActive(value: number): void
  profile: any,
  setProfile(value: any): void
  isUploaded: boolean
  setIsUploaded(value: boolean): void
  fileUpload: any
  setFileUpload(value: any): void
  careerPlan: any
  setCareerPlan(value: any): void
  interview: any
  setInterview(value: any): void
  loadingProfile: boolean
  setLoadingProfile(value: boolean): void
  loadingCareerPlan: boolean
  setLoadingCareerPlan(value: boolean): void
  loadingInterview: boolean
  setLoadingInterview(value: boolean): void
}

export interface IAgents {
  role: string;
  backstory: string;
  goal: string;
  llm: string;
}