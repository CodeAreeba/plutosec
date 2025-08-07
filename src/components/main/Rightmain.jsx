 
import React, { useEffect, useRef, useState } from "react";

const scriptLines = [
  "Starting enhanced PlutoSec terminal...",
  "Initializing security test suite...",
  "Scanning for vulnerabilities...",
  "✓ Firewall configuration verified",
  "✓ Endpoint protection active",
  "✓ SSL certificate valid",
  "Running penetration tests...",
  "✓ No critical threats found",
  "✓ All systems secure",
  "Security testing complete",
  "Loading authentication modules...",
  "✓ Two-factor authentication enabled",
  "✓ Session timeout set to 15 minutes",
  "✓ Biometric fallback active",
  "Validating encryption protocols...",
  "✓ AES-256 in use",
  "✓ RSA public key verified",
  "✓ HMAC integrity checks enabled",
  "Monitoring network traffic...",
  "✓ No anomalies detected",
  "✓ Ingress and egress routes clean",
  "✓ Suspicious IPs blocked",
  "Checking DNS security...",
  "✓ DNSSEC verified",
  "✓ No DNS spoofing attempts",
  "✓ Resolver secure",
  "Auditing user privileges...",
  "✓ No unauthorized escalations",
  "✓ Admin accounts verified",
  "✓ Privileged roles reviewed",
  "Inspecting logs for breaches...",
  "✓ Logs intact",
  "✓ No tampering detected",
  "✓ Audit trail complete",
  "Verifying software integrity...",
  "✓ Hash values match",
  "✓ Packages unaltered",
  "✓ All binaries signed",
  "Testing web app firewalls...",
  "✓ WAF rules loaded",
  "✓ OWASP Top 10 mitigated",
  "✓ Injection attempts blocked",
  "Reviewing access control policies...",
  "✓ Role-based access enforced",
  "✓ Principle of least privilege followed",
  "✓ Access control lists optimized",
  "Conducting brute-force protection tests...",
  "✓ Login attempts rate-limited",
  "✓ CAPTCHA enabled",
  "✓ Lockout thresholds configured",
  "Simulating phishing scenarios...",
  "✓ Awareness training passed",
  "✓ Email filters effective",
  "✓ No credentials leaked",
  "Evaluating cloud security posture...",
  "✓ IAM roles reviewed",
  "✓ Bucket permissions restricted",
];

const Rightmain = () => {
  const [displayLines, setDisplayLines] = useState([]);
  const terminalRef = useRef(null);
  const indexRef = useRef(0);
  const frameRef = useRef(null);

  useEffect(() => {
    let charIndex = 0;
    let currentLine = scriptLines[indexRef.current] || "";
    let currentDisplay = "";

    const typeChar = () => {
      if (indexRef.current >= scriptLines.length) {
        const cursor = document.createElement("span");
        cursor.className = "cursor";
        terminalRef.current?.appendChild(cursor);
        return;
      }

      if (charIndex < currentLine.length) {
        currentDisplay += currentLine[charIndex++];
        setDisplayLines((prev) => [
          ...prev.slice(0, indexRef.current),
          currentDisplay,
        ]);
        frameRef.current = requestAnimationFrame(typeChar);
      } else {
        indexRef.current++;
        charIndex = 0;
        currentDisplay = "";
        currentLine = scriptLines[indexRef.current] || "";
        setTimeout(() => {
          frameRef.current = requestAnimationFrame(typeChar);
        }, 30);
      }

      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    };

    frameRef.current = requestAnimationFrame(typeChar);

    return () => {
      cancelAnimationFrame(frameRef.current);
      const cursor = terminalRef.current?.querySelector(".cursor");
      if (cursor) cursor.remove();
    };
  }, []);

  return (
    <div
      className="w-[100%] h-[350px] bg-black/50 rounded-lg shadow-lg flex flex-col overflow-hidden relative max-md:w-[90%] max-md:h-[200px] border border-[#00D0E7] rounded-full shadow-[#00D0E7]/50 mr-10"
      style={{ boxShadow: "0 0 10px #00D0E7" }}
    >
      
      <div className="bg-[#1E1E1E] flex items-center px-3 py-1 gap-2 border-b border-[#333] cursor-move">
        <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
      </div>

    
      <div
        ref={terminalRef}
        className="flex-grow p-4 text-[10px] leading-relaxed text-[#00D0E7] font-mono"
        style={{
          overflowY: "scroll",
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
        }}
      >
        
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {displayLines.map((line, i) => (
          <div
            key={i}
            className="before:content-['$r00t@PlutoSec'] before:mr-1 before:text-[#00D0E7]"
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightmain;
