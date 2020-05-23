function handleNameChange(e) {
  let temp = { ...hospitalDetails };
  temp.name = e.target.value;
  setHospitalDetails(temp);
}

function onHospitalSubmit(e) {
  console.log(hospitalDetails);
  e.preventDefault();
}

module.export = {
  onHospitalSubmit: onHospitalSubmit,
  handleNameChange: handleNameChange,
};
