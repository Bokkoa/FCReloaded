import React from 'react';
import { graphql, StaticQuery} from 'gatsby';

import Img from 'gatsby-image';

export default function Image({fileName, alt, classStyle=null}) {

    return (
        <StaticQuery 
            query={
                graphql`
                query{
                    images: allFile {
                        edges {
                            node {
                                relativePath
                                childImageSharp{
                                        fluid(maxWidth: 1900, quality: 80) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
                `
            }

            render={data => {
                const image = data.images.edges.find( image => {
                    return image.node.relativePath.includes( fileName );
                });

                if ( !image ) return null;

                return <Img alt={alt} fluid={image.node.childImageSharp.fluid } style={{ borderRadius: '180px'}} className={classStyle || ''}/>
            }}
        />
    )
   
}
