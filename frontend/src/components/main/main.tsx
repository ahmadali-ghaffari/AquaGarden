import React, { useState, useEffect } from 'react';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import apiService from '../../services/apiService';
import { PlantData } from '../../models/Plant';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface MainProps {
  userId: number | null;
};

export const Main: React.FC<MainProps> = () => {

  const URI: string = "api/plants";
  const [plants, setPlants] = useState<PlantData[]>([]);
  const [score, setScore] = useState<number>();

  const modifyPlantPost = async (URI: string) => {
    const data: PlantData = await apiService.modifyData(URI, true);
    setScore(data.score);
  };

  useEffect(() => {
    async function fetchPlants() {
      try {
        const data: PlantData[] = await apiService.getData(URI, true);
        setPlants(data);
      } catch {
        console.log('No data was received!');
      };
    };
    fetchPlants();
  }, [score]);

  const clickHandlerUpVote = async (i: number) => {
    const URI: string = `api/plants/${i}/upvote`;
    modifyPlantPost(URI);
  };

  const clickHandlerDownVote = (i: number) => {
    const URI: string = `api/plants/${i}/downvote`;
    modifyPlantPost(URI);
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div className="container" style={{
      backgroundImage:
        `url("https://scontent.fbud5-1.fna.fbcdn.net/v/t1.6435-9/106375234_3848565721825354_6793320559406802285_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=9267fe&_nc_ohc=A2god1kNlXUAX9Q3F73&_nc_ht=scontent.fbud5-1.fna&oh=25f002c5db098abad314ed5b0cee4bab&oe=618C6E05")`,
    }}>
      <div className='plant-list-div'>
        <TableContainer className='plants-table' component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="customized table">
            <TableBody>
              {plants.map((plant) => (
                <StyledTableRow key={plant.plantId}>
                  <TableCell style={{ width: '450px' }}>
                    <TableRow >
                      <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }} align="center">{plant.plantName} ({plant.plantType})</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell align="center" style={{ fontSize: '15px' }}>{plant.description}</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableRow >
                        <TableCell align="center" style={{ fontSize: '12.5px' }}>Light: {plant.light}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell align="center" style={{ fontSize: '12.5px' }}>Medium: {plant.medium}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell align="center" style={{ fontSize: '12.5px' }}>Waterconditions: {plant.waterconditions}</TableCell>
                      </TableRow>
                    </TableRow>
                  </TableCell>
                  <TableCell>
                    <TableRow >
                      <div style={{
                        background: `url("${plant.plantImage}")`,
                        backgroundSize: 'cover', width: '400px', height: '350px'
                      }}>
                      </div>
                    </TableRow>
                    <TableRow>
                    </TableRow>
                    <p>{<AddCircleTwoToneIcon onClick={() => { clickHandlerUpVote(plant.plantId) }} />}</p>
                    <p style={{ fontSize: "17px", fontWeight: "bold", color: "blue" }}> {plant.score}</p>
                    <p>{<RemoveCircleTwoToneIcon onClick={() => { clickHandlerDownVote(plant.plantId) }} />} </p>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
