import {Component} from "react";
import api from '../../service/api';

import {AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';

export default class AddGuideSeqs extends Component{

    state = {
        newGuideSeq:{
          name:'',
          age:'',
          email:'',},
        cad_gene:'',
        cad_species:'',
        cad_sequence:'',
      };
  
  
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
        const {cad_gene,cad_species,cad_sequence} = this.state;  
          e.preventDefault();
  
          const GuideSeq = {'gene':cad_gene,'species':cad_species,'sequence':cad_sequence}
  
          await api.post(`/guideseq`,GuideSeq)
          .then(console.log(GuideSeq))
  
          alert('Guide sequence successfully added');
  
      }
  
      render(){
  
          const {cad_gene,cad_species,cad_sequence} = this.state;
  
          return(
  
              <div className="container" > 
                <div className="content">         
                  <div id="cadastro">
                    <form onSubmit={this.handleOnSubmit}> 
                      <h1>Add Guide Seq</h1> 
                      
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
