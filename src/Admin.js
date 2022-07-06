import { Container, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "./App.css";

function Admin() {
  return (
    <Container className="text-center d-flex justify-content-center">
      <div>
        <Card style={{ width: "18rem" }} className="adCard">
          <Card.Img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtMTg3LjYxIDI0NC45NWMwLjgxNjQxIDIuMjY5NSAwLjUxNTYyIDQuNzkzLTAuODEyNSA2LjgwODZsLTguMjE0OCAxMi4xMzMgMTMuNjg4IDEyLjUwNCAxMi4yODUtNy4zOTg0YzIuMDE5NS0xLjE5NTMgNC40ODA1LTEuMzg2NyA2LjY2MDItMC41MTU2MiAyLjE1NjIgMC45NDUzMSAzLjc2MTcgMi44MjgxIDQuMzYzMyA1LjEwNTVsMy40MDYyIDEzLjYxM2gxOC4wNTVsMy40MDIzLTEzLjYxN3YwLjAwMzkwNmMwLjYwMTU2LTIuMjc3MyAyLjIxMDktNC4xNjAyIDQuMzY3Mi01LjEwNTUgMi4xNzk3LTAuODcxMDkgNC42NDA2LTAuNjc5NjkgNi42NjAyIDAuNTE1NjJsMTIuMjg1IDcuMzk4NCAxMy42ODgtMTIuNTA0LTguMjE0OC0xMi4xMzd2MC4wMDM5MDdjLTEuMzc4OS0yLTEuNjgzNi00LjU1MDgtMC44MDg1OS02LjgxNjQgMC44NzEwOS0yLjI2NTYgMi44MTI1LTMuOTUzMSA1LjE3NTgtNC41MDc4bDEzLjYxMy0zLjQwMjN2LTE4LjA1NWwtMTMuNjE3LTMuNDAyMyAwLjAwMzkwNi0wLjAwMzkwNmMtMi4zNjMzLTAuNTUwNzgtNC4zMDQ3LTIuMjM4My01LjE3NTgtNC41MDM5LTAuODc1LTIuMjY1Ni0wLjU3MDMxLTQuODE2NCAwLjgwODU5LTYuODE2NGw4LjIxNDgtMTIuMTM3LTEzLjY5MS0xMi41MDQtMTIuMjg1IDcuMzk4NGgwLjAwMzkwNmMtMi4wMTk1IDEuMTk1My00LjQ4MDUgMS4zODY3LTYuNjYwMiAwLjUxOTUzLTIuMTU2Mi0wLjk0OTIyLTMuNzY1Ni0yLjgyODEtNC4zNjcyLTUuMTA1NWwtMy40MDIzLTEzLjYxN2gtMTguMDU1bC0zLjQwMjMgMTMuNjE3aC0wLjAwMzkwNmMtMC42MDE1NiAyLjI3NzMtMi4yMDcgNC4xNTYyLTQuMzYzMyA1LjEwNTUtMi4xNzk3IDAuODY3MTktNC42NDA2IDAuNjc1NzgtNi42NjAyLTAuNTE5NTNsLTEyLjI4NS03LjM5ODQtMTMuNjg4IDEyLjUwNCA4LjIxNDggMTIuMTM3YzEuMzc4OSAyIDEuNjgzNiA0LjU1MDggMC44MDg1OSA2LjgxNjQtMC44NzUgMi4yNjU2LTIuODEyNSAzLjk1MzEtNS4xNzU4IDQuNTAzOWwtMTMuNjE3IDMuNDA2MnYxOC4wNTVsMTMuNjE3IDMuNDAyM2MyLjM0NzcgMC41ODk4NCA0LjI3MzQgMi4yNjk1IDUuMTc5NyA0LjUxNTZ6Ii8+CiAgPHBhdGggZD0ibTQ1Ny40IDMyNC4yaDEuMTA5NGwzLjU1MDgtMjEuMjM4Yy04LjEyNS00LjQ2MDktMTQuOTA2LTExLjAyNy0xOS42MzMtMTkuMDA4LTQuNzIyNy03Ljk3NjYtNy4yMTg4LTE3LjA3OC03LjIyNjYtMjYuMzUydi00LjM2NzJsLTIxLjgyOC0yMi43OTN2MC4wMDM5MDdjLTIuODY3Mi02LjY4NzUtNi4xMDU1LTEzLjIwNy05LjY5NTMtMTkuNTM1LTEyLjgyLTE4Ljg2Ny0zMS45My0zMi41NjItNTMuOTE4LTM4LjYzMy0yMS45ODgtNi4wNzQyLTQ1LjQxOC00LjEzMjgtNjYuMTA1IDUuNDgwNWw4LjUwNzggNy43Njk1aDAuMDAzOTA2YzIuNzMwNSAyLjQ2ODggMy4yMzQ0IDYuNTY2NCAxLjE4MzYgOS42MjExbC01LjkxOCA4LjY1NjIgOC45NTMxIDIuMjE4OC0wLjAwMzkwNiAwLjAwMzkwNmMzLjMwNDcgMC44MTY0MSA1LjYyMTEgMy43NzczIDUuNjI1IDcuMTc1OHYyOS42MDJjLTAuMDAzOTA2IDMuMzk4NC0yLjMyMDMgNi4zNTk0LTUuNjI1IDcuMTc1OGwtOC45NTMxIDIuMjE4OCA1LjkxOCA4LjY1NjIgMC4wMDM5MDYgMC4wMDM5MDZjMi4wNTA4IDMuMDU0NyAxLjU0NjkgNy4xNTIzLTEuMTgzNiA5LjYxNzJsLTIyLjU3IDIwLjU3djAuMDAzOTA3Yy0yLjQxNDEgMi4xNDg0LTUuOTMzNiAyLjUwNzgtOC43MzA1IDAuODg2NzJsLTguNTA3OC01LjEwNTUtMi4zNjcyIDkuNTQ2OS0wLjAwMzkwNi0wLjAwMzkwNmMtMC44MTY0MSAzLjMwNDctMy43NzczIDUuNjIxMS03LjE3NTggNS42MjVoLTI5LjYwMmMtMy4zOTg0LTAuMDAzOTA2LTYuMzU5NC0yLjMyMDMtNy4xNzU4LTUuNjI1bC0yLjM2NzItOS41NDY5LTguNTA3OCA1LjEwNTUtMC4wMDM5MDYgMC4wMDM5MDZjLTIuNzk2OSAxLjYyNS02LjMyMDMgMS4yNjU2LTguNzMwNS0wLjg4NjcybC05Ljc2OTUtOC44Nzg5di0wLjAwMzkwNmMtNi41NDY5IDEwLjQ5Mi05LjExNzIgMjIuOTgtNy4yNDIyIDM1LjIwMyAxLjg3NSAxMi4yMjcgOC4wNzQyIDIzLjM3MSAxNy40NjkgMzEuNDEgOS4zOTQ1IDguMDQzIDIxLjM2MyAxMi40NDkgMzMuNzMgMTIuNDE4aDE2OC42NGMxNS4wMDgtMjMuMDU5IDQwLjY0MS0zNi45NzcgNjguMTUyLTM3eiIvPgogIDxwYXRoIGQ9Im00OTcuOCAzMDguMjJjLTcuMTE3MiAxLjU3ODEtMTQuNDkyIDEuNTc4MS0yMS42MDUgMGwtMi42NjQxIDE1Ljk4NGgyNi45MzR6Ii8+CiAgPHBhdGggZD0ibTQzNS4yIDIxMy4yMWMtMC4wMzEyNS0yLjc5NjkgMS41NTQ3LTUuMzYzMyA0LjA3MDMtNi41ODU5bDI5LjU5OC0xNC44MDF2MC4wMDM5MDdjMS41NzQyLTAuODE2NDEgMy4zOTA2LTEuMDI3MyA1LjEwNTUtMC41OTM3NWw1OS4xOTkgMTQuODAxYzMuMzAwOCAwLjgxNjQxIDUuNjIxMSAzLjc3NzMgNS42MjExIDcuMTc1OHYxOS4xNjRsNy4zOTg0LTcuMzk4NCAwLjAwMzkwNi0xOS4xNjRjMC05LjgxMjUtMy44OTg0LTE5LjIyMy0xMC44MzYtMjYuMTY0LTYuOTQxNC02LjkzNzUtMTYuMzUyLTEwLjgzNi0yNi4xNjQtMTAuODM2aC00NC4zOThjLTkuODEyNSAwLTE5LjIyMyAzLjg5ODQtMjYuMTYgMTAuODM2LTYuOTM3NSA2Ljk0MTQtMTAuODM2IDE2LjM1Mi0xMC44MzYgMjYuMTY0djE5LjE2NGw3LjM5ODQgNy4zOTg0eiIvPgogIDxwYXRoIGQ9Im00OTcuMjEgMzM5aC0yMC40MjJsMTAuMjExIDIwLjQyMnoiLz4KICA8cGF0aCBkPSJtNTI0IDI1Ny42MXYtMzguNjI1bC01MC45MS0xMi43MjctMjMuMDg2IDExLjU0M3YzOS44MDljMCAxMy4yMTkgNy4wNTA4IDI1LjQzNCAxOC40OTYgMzIuMDQzIDExLjQ0OSA2LjYwOTQgMjUuNTUxIDYuNjA5NCAzNyAwIDExLjQ0OS02LjYwOTQgMTguNS0xOC44MjQgMTguNS0zMi4wNDN6bS00NC4zOTgtNy4zOTg0aC0xNC44MDF2LTE0LjgwMWgxNC44MDF6bTI5LjU5OCAwaC0xNC43OTd2LTE0LjgwMWgxNC44MDF6Ii8+CiAgPHBhdGggZD0ibTM5OC4yIDQ1OC4yMWMtMC4wNjY0MDctNS4zNTU1IDEuNzQ2MS0xMC41NjIgNS4xMjg5LTE0LjcxNSAzLjM3ODktNC4xNTIzIDguMTEzMy02Ljk4NDQgMTMuMzcxLTggMS4yMjY2LTAuMTgzNTkgMi40NjQ4LTAuMjU3ODEgMy42OTkyLTAuMjIyNjZ2LTcuNDcyN2gtMjkuNTk4djMzLjU5NGMyLjMxNjQtMS4zNDM4IDQuODA0Ny0yLjM2MzMgNy4zOTg0LTMuMDM1MnoiLz4KICA8cGF0aCBkPSJtNTE2LjYgMzM5aC0yLjgxMjVsLTIwLjIwMyA0MC4zMjhjLTEuMjY1NiAyLjQ2ODgtMy44MDg2IDQuMDIzNC02LjU4NTkgNC4wMjM0cy01LjMyMDMtMS41NTQ3LTYuNTg1OS00LjAyMzRsLTIwLjE5OS00MC4zMjhoLTIuODEyNWMtMTcuNjU2IDAuMDI3MzQ0LTM0LjU3OCA3LjA1MDgtNDcuMDYyIDE5LjUzNS0xMi40ODQgMTIuNDg0LTE5LjUwOCAyOS40MDYtMTkuNTM1IDQ3LjA2MnY3LjM5ODRoMzdjMS45NjA5IDAgMy44NDM4IDAuNzgxMjUgNS4yMzA1IDIuMTY4czIuMTY4IDMuMjY5NSAyLjE2OCA1LjIzMDV2MjAuNWM0LjY4MzYgNC4yMDcgNy4zNzExIDEwLjIwMyA3LjM5ODQgMTYuNWg5Ni4xOTV2LTM3YzAtNC4wODU5IDMuMzE2NC03LjM5ODQgNy40MDIzLTcuMzk4NGgzN2wtMC4wMDM5MDYtNy4zOTg0Yy0wLjAyNzM0NC0xNy42NTYtNy4wNTA4LTM0LjU3OC0xOS41MzUtNDcuMDYyLTEyLjQ4NC0xMi40ODQtMjkuNDA2LTE5LjUwOC00Ny4wNTktMTkuNTM1em0tMjIuMTk5IDEwMy41OWgtMTQuODAxdi0xNC43OTdoMTQuODAxem0wLTI5LjU5OGgtMTQuODAxdi0xNC44MDFoMTQuODAxeiIvPgogIDxwYXRoIGQ9Im0yNTAuMjEgMzkwLjhoMTQuODAxdjE0LjgwMWgtMTQuODAxeiIvPgogIDxwYXRoIGQ9Im0yNjUuMDEgNDU3LjR2LTM3aC0xNC44MDF2MzdjMC4wMTU2MjUgMTMuNzM0IDUuNDc2NiAyNi44OTggMTUuMTg4IDM2LjYwOSA5LjcxMDkgOS43MTA5IDIyLjg3OSAxNS4xNzIgMzYuNjA5IDE1LjE4OGgyOS41OTh2LTE0Ljc5N2gtMjkuNTk4Yy05LjgwODYtMC4wMTE3MTktMTkuMjExLTMuOTE0MS0yNi4xNDgtMTAuODUycy0xMC44MzYtMTYuMzQtMTAuODQ4LTI2LjE0OHoiLz4KICA8cGF0aCBkPSJtMzQ2LjQgNDk0LjRoMTQuODAxdjE0LjgwMWgtMTQuODAxeiIvPgogIDxwYXRoIGQ9Im01MTEuOTMgMzAyLjk2IDMuNTUwOCAyMS4yMzhoMS4xMTMzYzE5LjU1NSAwIDM4LjQ0OSA3LjA3MDMgNTMuMjAzIDE5LjkwNiA4LjQ0NTMtOS4zMjAzIDEzLjIwMy0yMS4zOTggMTMuMzgzLTMzLjk3MyAwLjE4MzU5LTEyLjU3NC00LjIyMjctMjQuNzg1LTEyLjM5NS0zNC4zNDQtOC4xNjgtOS41NjI1LTE5LjU0My0xNS44MTYtMzEuOTk2LTE3LjU5NC0wLjExNzE5IDkuMTY4LTIuNjY0MSAxOC4xNDUtNy4zODI4IDI2LjAxMi00LjcxODggNy44NjMzLTExLjQ0MSAxNC4zMzYtMTkuNDc3IDE4Ljc1NHoiLz4KICA8cGF0aCBkPSJtNDIwLjQgNTc1Ljc5YzAgMS45NjQ4IDAuNzgxMjUgMy44NDM4IDIuMTY4IDUuMjM0NCAxLjM4NjcgMS4zODY3IDMuMjY5NSAyLjE2NDEgNS4yMzQ0IDIuMTY0MWgxMTguMzljMS45NjA5IDAgMy44NDM4LTAuNzc3MzQgNS4yMzA1LTIuMTY0MSAxLjM5MDYtMS4zOTA2IDIuMTY4LTMuMjY5NSAyLjE2OC01LjIzNDR2LTU5LjE5NWgtMTMzLjJ6Ii8+CiAgPHBhdGggZD0ibTU1My41OSA0NjQuOGMwIDEuOTY0OC0wLjc3NzM0IDMuODQzOC0yLjE2OCA1LjIzNDQtMS4zODY3IDEuMzg2Ny0zLjI2OTUgMi4xNjgtNS4yMzA1IDIuMTY4aC0xMTFjLTQuMDg1OSAwLTcuMzk4NC0zLjMxNjQtNy4zOTg0LTcuNDAyM3YtNy4zOTg0Yy0wLjAxMTcxOS0yLjE2MDItMC45NTcwMy00LjIxMDktMi41ODk4LTUuNjI1LTEuMzM1OS0xLjE1MjMtMy4wNDY5LTEuNzg1Mi00LjgxMjUtMS43NzM0LTIuMTMyOC0wLjA4MjAzMS00LjE5MTQgMC43ODkwNi01LjYyMTEgMi4zNzUtMS40Mjk3IDEuNTg1OS0yLjA3ODEgMy43MjI3LTEuNzc3MyA1LjgzNTl2Ni41ODU5YzAgMS45NjQ4LTAuNzgxMjUgMy44NDM4LTIuMTY4IDUuMjM0NC0xLjM4NjcgMS4zODY3LTMuMjY5NSAyLjE2OC01LjIzMDUgMi4xNjgtNC4wNzAzLTAuMDA3ODEzLTcuOTY0OCAxLjY2NDEtMTAuNzY2IDQuNjE3Mi0yLjgwMDggMi45NTMxLTQuMjU3OCA2LjkyOTctNC4wMzUyIDEwLjk5NiAwLjQzNzUgMy45MTggMi4zMzIgNy41MjczIDUuMzA0NyAxMC4xMTcgMi45NzI3IDIuNTg5OCA2LjgxMjUgMy45NzI3IDEwLjc1NCAzLjg2NzJoMTU0LjEzYzUuODgyOC0wLjAxOTUzMSAxMS41Mi0yLjM2MzMgMTUuNjgtNi41MjM0IDQuMTYwMi00LjE1NjIgNi41MDM5LTkuNzkzIDYuNTE5NS0xNS42NzZ2LTUxLjc5N2gtMjkuNTk4eiIvPgogPC9nPgo8L3N2Zz4K"/>
          <Card.Body>
            <Card.Title>Admin</Card.Title>
            <Card.Text>
              Create your own quiz!
            </Card.Text>
            <Link to="/adminpanel" ><Button variant="primary">Click here</Button></Link>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Admin;
