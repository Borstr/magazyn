import styled from "styled-components";

const Navbar = ({setFilter}) => {
    return (
        <StyledNav>
            <Searchbar type='text' placeholder='Wyszukaj'/>
            <Filters  onChange={data => setFilter(data.target.value)}>
                <option>Długopis</option>
                <option>Balon</option>
                <option>Torba bawełniana</option>
                <option>Torba papierowa</option>
                <option>Koszulka</option>
                <option>Otwieracz</option>
                <option>Zapalniczka</option>
                <option>Kubek</option>
                <option>Przypinka</option>
                <option>Czapka</option>
            </Filters>
        </StyledNav>
    )
}

export default Navbar;

const Searchbar = styled.input`
    border: 2px solid #616ae0;
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, .24);
    padding: .5rem;
    font-size: 1.25rem;
    transition: 300ms border-color ease-in-out;
    margin: 0 1rem;

    &:focus {
        border-color: #8d92dc;
        outline: none;
    }
`;

const Filters = styled.select`
    height: 2.75rem;
    border-radius: 5px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, .24);
    padding: .5rem;
    font-size: 1.25rem;
    border: 2px solid #616ae0;
    transition: 300ms border-color ease-in-out;

    &:focus {
        border-color: #8d92dc;
        outline: none;
    }
`;

const StyledNav = styled.nav`
  height: 4rem;
  width: 100%;
  border-bottom: 2px solid #616ae0;
  background-color: #fff;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, .24);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;