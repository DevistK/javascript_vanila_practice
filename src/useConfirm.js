const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      try {
        onCancel();
      } catch (error) {
        return;
      }
    }
  };
  return confirmAction;
};
export default useConfirm;
