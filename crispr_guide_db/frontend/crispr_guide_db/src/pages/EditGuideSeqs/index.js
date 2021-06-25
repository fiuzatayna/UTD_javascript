import {Component} from "react";
import api from '../../service/api';

import {AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';

export default class EditGuideSeqs extends Component{
    
    state = {
        id:this.props.match.params.id,
        cad_gene:'',
        cad_species:'',
        cad_sequence:'',
      };
  
      componentDidMount = async e =>{
     
        const response = await api.get(`/guideseq/${this.state.id}`)
        //console.log(`This is the object response: ${response}`);
        //console.log(`This is the object response.data ${response.data}`);

        this.setState({
          cad_sequence:response.data.sequence,
          cad_species:response.data.species,
          cad_gene:response.data.gene,
        });

        console.log(response);
        console.log(this.state.id);
  
      }
  
      handleGeneChange = e =>{
        this.setState({cad_gene: e.target.value});
      };
  
      handleSpeciesChange = e =>{
        this.setState({cad_species: e.target.value});
      };
  
      handleSequenceChange = e =>{
        this.setState({cad_sequence: e.target.value});
      };
  
      handleOnSubmit = async e =>{
        const {id, cad_gene,cad_species,cad_sequence} = this.state;  
          e.preventDefault();
  
          console.log('Change info');
          console.log(this.state);

          const GuideSeq = {'id': id,'gene':cad_gene,'species':cad_species,'sequence':cad_sequence}
  
          await api.put(`/guideseq`,GuideSeq)
          .then(console.log(GuideSeq))
  
          alert('Guide sequence successfully changed.');
  
      }
  
      render(){
  
        const {id,cad_gene,cad_species,cad_sequence} = this.state;
  
        return(
  
            <div className="container" > 
              <div className="content">         
                <div id="cadastro">
                  <form onSubmit={this.handleOnSubmit}> 
                    <h1>Change Guide Seq</h1> 
                    
                    <p> 
                      <label >Id</label>
                      <input type="number" value={id} readOnly/>
                    </p>
  
                    <p> 
                      <label>Gene Symbol</label>
                      <input required="required" type="text" placeholder="Type the gene symbol"
                          value={cad_gene} onChange={this.handleGeneChange}/>
                    </p>
  
                    <p> 
                      <label>Target Species</label>
                      <input required="required" type="text" placeholder="Type the target species"
                          value={cad_species} onChange={this.handleSpeciesChange}/> 
                    </p>                  
                    
                    <p> 
                      <label>Guide Sequence</label>
                      <input required="required" type="text" placeholder="Type the guide sequence"
                          value={cad_sequence} onChange={this.handleSequenceChange}/>
                    </p>                 
                    <p> 
                      <input type="submit" value="Submit"/> 
                    </p>
                  </form>
                  <Link to={'/'}><button><AiFillHome/></button></Link>
                </div>
              </div>
          </div>
  
        )
    }
  }
