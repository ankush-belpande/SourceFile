import * as React from 'react';
import styles from '../../components/SinglePageApp.module.scss';

export default class HomePage extends React.Component<any> {
    public render(): React.ReactElement<any> {
      return (
        <div className={ styles.singlePageApp }>
            
            <div className={ styles.container }>
          <div className={ styles.rowResult }>
            <span className={ styles.titleWhite }>Results</span>
          </div>
          
          <div className={ styles.rowTable }>
            
            <div className="table-responsive">
                        <table className="table">
                              <thead className=" text-primary thead-light">
                            <tr><th>
                                Result
                            </th>
                            <th>
                                Pariod
                            </th>
                            <th>
                                Payroll Account Number
                            </th>
                            <th>
                                Payment Date/Reversal Date
                            </th>
                            <th>
                                Sub Period (if Partial Period)
                            </th>
                            <th>
                                Pay Group Details
                            </th>
                            <th>
                                Primary Position
                            </th>
                        </tr></thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                            <i className="material-icons">search</i>
                                    </button>    
                                </td>
                                <td>
                                    
                                    16-30 Apr 2018                                                    
                                </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>    
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                   
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>  
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                     
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>     
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                  
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>    
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                   
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>  
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                     
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td> 
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                      
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>  
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                     
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                    <td>
                                        10,000.00
                                    </td>
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>  
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>                                                     
                                </tr>
                                <tr>
                                        <td>
                                                <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                        <i className="material-icons">search</i>
                                                </button>    
                                            </td>
                                            <td>
                                                
                                                16-30 Apr 2018                                                    
                                            </td>
                                    <td>
                                        10,000.00
                                    </td>
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>  
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>                                                     
                                </tr>
                                <tr>
                                        <td>
                                                <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                        <i className="material-icons">search</i>
                                                </button>    
                                            </td>
                                            <td>
                                                
                                                16-30 Apr 2018                                                    
                                            </td>
                                    <td>
                                        10,000.00
                                    </td>
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>  
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>                                                     
                                </tr>
                                    
                        </tbody>
                    </table>
            </div>
          </div>
          </div>
        </div>
           
      );
    }
  }
