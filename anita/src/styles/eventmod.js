import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  min-height: 1495px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 118px 310px 0;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 20px 0;
  }
`;

export const EventFrame = styled.div`
  border-radius: 15px;
  background-color: rgba(214, 220, 231, 1);
  display: flex;
  width: 100%;
  max-width: 1300px;
  flex-direction: column;
  overflow: hidden;
  justify-content: start;
  padding: 30px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  width: 100%;
  gap: 40px 100px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const EventInfo = styled.div`
  display: flex;
  min-width: 240px;
  min-height: 100px;
  flex-direction: column;
  font-family: Alexandria, sans-serif;
  color: rgba(34, 51, 58, 1);
  justify-content: center;
  width: 693px;
  margin: auto 0;
  padding: 0 6px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const EventTitle = styled.h1`
  font-size: 38px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const OrganizerName = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0 0 0;
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 41px;
`;

export const MenuIcon = styled.img`
  aspect-ratio: 1.08;
  object-fit: contain;
  object-position: center;
  width: 41px;
  border-radius: 0;
`;

export const ListSection = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: rgba(229, 231, 235, 1);
  display: flex;
  min-height: 200px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 10px 0 0 10px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  min-height: 29px;
  width: 251px;
  max-width: 100%;
  padding-left: 14px;
  color: rgba(34, 51, 58, 1);
  font: 700 24px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  margin: 0;
`;

export const SearchSection = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 10px;
  min-height: 59px;
  width: 100%;
  max-width: 1240px;
  align-items: center;
  gap: 10px;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const SearchLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const SearchInput = styled.input`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  padding: 10px 30px;
  border: none;
  font: 400 32px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  color: rgba(34, 51, 59, 0.68);

  &::placeholder {
    color: rgba(34, 51, 59, 0.68);
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  aspect-ratio: 1.03;
`;

export const SearchButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: var(--Secondary, #22333b);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.45);
  border: none;
  display: flex;
  min-height: 59px;
  gap: 8px;
  padding: 17px 8px;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  color: var(--Primary-scale-100, #fffbff);
  font: 700 20px PT Sans, sans-serif;
`;

export const FiltersSection = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
  align-items: start;
  gap: 20px;
  flex-wrap: wrap;
`;

export const TableHeader = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  min-height: 56px;
  width: 100%;
  gap: 40px 53px;
  overflow: hidden;
  color: rgba(102, 102, 102, 1);
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 30px;
  font: 400 16px Montserrat, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const HeaderCell = styled.span`
  align-self: stretch;
  padding: 0 20px;
  white-space: nowrap;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const ApplicantRow = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  min-height: 56px;
  width: 100%;
  gap: 40px 53px;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 30px;

  &:nth-child(even) {
    background-color: rgba(229, 231, 235, 1);
  }

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const ProfileButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 180px;
  padding: 0 20px;
`;

export const ProfileButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: var(--Secondary, #22333b);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.45);
  border: none;
  display: flex;
  gap: 8px;
  margin: auto 0;
  padding: 6px 8px;
  cursor: pointer;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  height: 100%;
  width: 119px;
  padding: 0 20px;
`;

export const CheckboxWrapper = styled.div`
  align-self: stretch;
  display: flex;
  min-height: 24px;
  width: 24px;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin: auto 0;
`;

export const StatusIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: stretch;
  margin: auto 0;
`;