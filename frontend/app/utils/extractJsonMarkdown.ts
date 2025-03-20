export const extractJsonMarkdown = (data: string) => {

  // Divide o texto em linhas
  const linhas = data.split('\n');
  // Filtra as linhas que não contêm crases triplas
  const jsonLinhas = linhas.filter(linha => !linha.trim().startsWith('```'));
  // Junta as linhas novamente
  const jsonText = jsonLinhas.join('');

  return jsonText;

}