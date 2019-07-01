function double(a,b) {
  if (arguments.length > 1) {
    console.log(a*b);
  } else {
    return (b) => console.log(a*b);
  }
}

export { double }
