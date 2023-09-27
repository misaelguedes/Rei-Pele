import './Estatísticas.css'

export default function Estatísticas() {
    return (
        <article>
            <p className="sumario">Os números de Pelé diferem entre as fontes, principalmente devido a jogos amigáveis. A tabela a seguir é um sumário de fontes que inclui dados dos sites oficiais do Santos e da FIFA, entre outros.</p>
            <div id="tabela">
                <table className="tb1">
                    <thead>
                        <tr>
                            <th className="titulosumario"></th>
                            <th scope="col" class="titulosumario">Partidas</th>
                            <th scope="col" class="titulosumario">Gols</th>
                            <th scope="col" class="titulosumario">Média</th>
                        </tr>
                    </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Torneios Domésticos</th>
                            <td>702</td>
                            <td>656</td>
                            <td>0,94</td>
                        </tr>
                        <tr>
                            <th scope="row">Torneios Internacionais</th>
                            <td>18</td>
                            <td>24</td>
                            <td>1,33</td>
                        </tr>
                        <tr>
                            <th scope="row">Seleção Brasileira</th>
                            <td>92</td>
                            <td>77</td>
                            <td>0,84</td>
                        </tr>
                        <tr>
                            <th scope="row">Oficial</th>
                            <td>812</td>
                            <td>757</td>
                            <td>0,93</td>
                        </tr>
                        <tr>
                            <th scope="row">Partidas Amigáveis e Torneios Extintos</th>
                            <td>554</td>
                            <td>526</td>
                            <td>0,95</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <th scope="row" class="titulosumario">Total</th>
                            <td><strong>1366</strong></td>
                            <td><strong>1283</strong></td>
                            <td><strong>0,94</strong></td>
                        </tr>
                        </tfoot>
                </table>
                <table className="tb2">
                    <thead>
                        <th className="titulosumario"></th>
                        <th scope="col" class="titulosumario">Partidas</th>
                        <th scope="col" class="titulosumario">Gols</th>
                        <th scope="col" class="titulosumario">Média</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Santos</th>
                            <td>1116</td>
                            <td>1091</td>
                            <td>0,98</td>
                        </tr>
                        <tr>
                            <th scope="row">New York Cosmos</th>
                            <td>111</td>
                            <td>65</td>
                            <td>0,59</td>
                        </tr>
                        <tr>
                            <th scope="row">Brasil</th>
                            <td>114</td>
                            <td>95</td>
                            <td>0,83</td>
                        </tr>
                        <tr>
                            <th scope="row">Outro</th>
                            <td>25</td>
                            <td>32</td>
                            <td>1,28</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" class="titulosumario">Total</th>
                                <td><strong>1366</strong></td>
                            <td><strong>1283</strong></td>
                            <td><strong>0,94</strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </article>
    )
}