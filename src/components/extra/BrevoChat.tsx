"use client";
import React, { useEffect } from "react";

const BrevoChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
       <!-- Brevo Conversations {literal} -->
    (function(d, w, c) {
        w.BrevoConversationsID = '6533ed1d4c4153558b62683e';
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        var s = d.createElement('script');
        s.async = true;
        s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'BrevoConversations');
<!-- /Brevo Conversations {/literal} -->
`;
    document.querySelector("head")?.appendChild(script);
  }, []);
  return <></>;
};

export default BrevoChat;
