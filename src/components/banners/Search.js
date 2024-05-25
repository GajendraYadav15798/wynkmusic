import React from "react";
import { useUser } from "../../providers/UserProvider";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

function Search() {
  const { searchData } = useUser();

  const onMusicHandler = (index) => {
    let song = searchData[index];
  };

  return (
    <div>
      <Table sx={{ width: "30%", margin: "auto", tableLayout: "fixed", marginTop: '150px', border: 'none', "& .MuiTableCell-root": { border: 'none' } }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "10%", padding: "8px" }}>
              Image
            </TableCell>
            <TableCell sx={{ width: "40%", padding: "8px" }}>Title</TableCell>
            <TableCell sx={{ width: "20%", padding: "8px" }}>
              Release Date
            </TableCell>
            <TableCell sx={{ width: "20%", padding: "8px" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchData != null && searchData.length > 0 ? (
            searchData.map((obj, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  <img
                    src={obj.thumbnail}
                    alt={`Thumbnail of ${obj.title}`}
                    style={{ width: "40px", height: "40px",borderRadius:'5px'}}
                  />
                </TableCell>
                <TableCell sx={{ color: "white",fontWeight:'300',fontFamily:'roboto' }}>{obj.title}</TableCell>
                <TableCell>
                  {new Date(obj.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => onMusicHandler(index)}
                    variant="contained"
                    style={{
                      backgroundColor: "red",
                      borderRadius: "45px",
                      height:'30px',
                      width: "100px",
                      fontWeight: "300",
                    }}
                  >
                    Play
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>
                <h1>No Songs found</h1>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Search;
