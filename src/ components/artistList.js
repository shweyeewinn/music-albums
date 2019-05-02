import React from 'react';
import {Link} from 'react-router-dom';
import { listenerCount } from 'events';

const ArtistsList = (props) => {
    // console.log(props);

    const list = ({allArtists}) => {
        // console.log(allArtists);
        if(allArtists){
        
            return allArtists.map((item)=>{
                return(
                    <Link key={item.id} to={`/artist/${item.id}`}>

                    </Link>
                )
            })

        }
    }
    return(
        <div className="artists_list"> 
            <h4>Browse the artists</h4>
            {list(props)}
        </div>
    )
}

export default ArtistsList;