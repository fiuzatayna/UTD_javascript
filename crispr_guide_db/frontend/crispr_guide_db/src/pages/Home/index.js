import { Component } from "react";  
import {FaTrash, FaEdit, FaPlus} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import api from '../../service/api';


export default class Home extends Component{

    state = {
        registros:[],
    };

    componentDidMount = async () =>{

        const response = await api.get(`/guideseqs`); 
        
        response.data.map(res=>{
            const {registros} = this.state;
            
            this.setState({
                registros :[...registros, res],     
            });    
        })

        console.log(this.state.registros);

    }

    deleteGuideSeq = async (id) =>{


        console.log(id);

        await api.delete(`/guideseq/${id}`); 
        
        alert('Guide sequence successfully deleted.');

    }
    
    render(){

        const {registros} = this.state;
        
            return(          
                <div className="wholepage">
                    <div className="content">
                        
                    <h1>Guide Sequence List</h1>
                    
                    <table>
                        <thead>
                            <tr>
                            <th>Id</th>    
                            <th>Gene</th>
                            <th>Species</th>
                            <th>Sequence</th>
                            <th></th>
                            </tr>
                        </thead>

                        <tbody>
                        {registros.map(registro=>(
                                <tr key={registro.id}>
                                <td data-label="Id" >{registro.id}</td>
                                <td data-label="Gene" >{registro.gene}</td>
                                <td data-label="Species" >{registro.species}</td>
                                <td data-label="Sequence">{registro.sequence}</td>
                                <td>
                                    
                                    <Link to={`/edit/${registro.id}`}><button><FaEdit/></button></Link>
                                    <button onClick={()=>this.deleteGuideSeq(registro.id)}><FaTrash/></button>
                                </td>
                                </tr>
                            ))}
                    </tbody>
                    </table>
                    <Link to={'/add'}><button><FaPlus/></button></Link>
                </div>
                <div className="infobox">
                    <h2>Hello Gene Editors!</h2>
                    <p class="black-just">This is a sample database for CRISPR RNA Guide Sequences. CRISPR stands for Clustered Interspaced Short Palindromic Repeats, which are short DNA regions separated by DNA repetitions. When bacteria are attacked by pathogens, if they survive, they can cut little pieces of the pathogen's genetic material and keep it in a CRISPR "library". A CRISPR associated (Cas) protein can then use these little pieces as guide sequences. If the Cas protein finds DNA or rather RNA with a corresponding sequence to the guide RNA, it will cut it down! That's very cool and nowadays this CRISPR-Cas system is used by scientists to do genetic edition, because Cas is very precise and specific in its cuts one provided with the appropriate guide sequences. On the left you see examples of four guide sequences for two different genes in humans and mice.</p>
                    <p class="black-just">Those sequences were retrieved from the <a href="https://www.genscript.com/gRNA-database.html">gRNA database</a> of the GenScript website. Feel free to check it out and add other guide sequences. Try searching for one of genes: SHH, ERVW-1, TLR1.
                    </p>                    
                </div>
                <div className="GIF">
                    <img src="https://scx2.b-cdn.net/gfx/news/2019/crisprenzyme.gif" id="CasGif" alt="Artistic depiction of Cas cleaving a DNA strand"/> 
                    <p><a href="https://www.biointeractive.org/classroom-resources/crispr-cas-9-mechanism-applications">Source: biointeractive.org</a></p>
                </div>

            </div>                  
        );
    }
}
