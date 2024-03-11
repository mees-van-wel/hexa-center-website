import { component$ } from "@builder.io/qwik";
import { Stack } from "~/components/generic/stack/stack";
import { Group } from "~/components/generic/group/group";
import { Section } from "~/components/section/section";

export default component$(() => {
  return (
    <Section>
      <Group noWrap gap={64}>
        <Stack gap={64}>
          <a
            href="https://www.wolterskluwer.com/nl-nl/solutions/twinfield-accounting"
            rel="noopener noreferrer"
            target="_blank"
          >
            <picture>
              <source srcSet="/images/twinfield.avif" type="image/avif" />
              <source srcSet="/images/twinfield.webp" type="image/webp" />
              <img
                src="/images/twinfield.png"
                alt="Twinfield"
                title="Twinfield"
                width="100%"
                height={50}
              />
            </picture>
          </a>
          <Stack>
            <h2>
              Enhance Your Financial Operations with Our Twinfield Integration
            </h2>
            <p>
              Automate your financial transactions and ensure your customer data
              is always up to date with Hexa Center's certified Twinfield
              integration. Experience seamless financial management directly
              from your invoices created in Hexa Center.
            </p>
          </Stack>
          <Stack>
            <h2>Benefits of Our Twinfield Integration</h2>
            <ul>
              <li>
                <strong>Automatic Transaction Creation:</strong> Automatically
                generate financial transactions in Twinfield from invoices
                created in Hexa Center, eliminating manual entry and reducing
                errors.
              </li>
              <li>
                <strong>Seamless Customer Synchronization:</strong> Keep your
                customer records synchronized between Hexa Center and Twinfield,
                ensuring accurate and consistent data across your financial
                management system.
              </li>
              <li>
                <strong>Certified Twinfield Partner:</strong> As a certified
                Twinfield partner, Hexa Center guarantees a secure and optimized
                integration, giving you peace of mind and streamlined financial
                workflows.
              </li>
            </ul>
          </Stack>
        </Stack>
        <div
          style={{
            borderRadius: "3rem",
            backgroundColor: "white",
            overflow: "hidden",
            minWidth: "500px",
            border: "4px solid rgb(var(--primary-color))",
          }}
        >
          <picture>
            <source
              srcSet="/images/ipad-pro-mockup-light.avif"
              type="image/avif"
            />
            <source
              srcSet="/images/ipad-pro-mockup-light.webp"
              type="image/webp"
            />
            <img
              src="/images/ipad-pro-mockup-light.png"
              alt="Twinfield"
              title="Twinfield"
              width="100%"
              height={500}
              style={{
                objectFit: "contain",
                scale: 1.5,
              }}
            />
          </picture>
        </div>
      </Group>
    </Section>
  );
});
