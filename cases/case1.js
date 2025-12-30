1 | async function R9X1(sock, target) {
  var R9X = {
      sendPaymentMessage: {
    }
  };
  await sock.relayMessage(target, R9X, {
  });
}